import { useEffect, useState } from "react";
import { FaCloudUploadAlt,FaSearch } from "react-icons/fa";
import {AppContainer,ResponSiveContainer,InputAndButtonContainer, LeaderboardTableContainer,
  LeaderboardHeader,
  Name,
  Size,
  LastModified,
  LoadingViewContainer
 } from "./StyledComponents"
import Header from "../Header"
import Files from "../Files"
import "./index.css" 

import Loader from "react-loader-spinner";

const Storage = () => {
  const [data, setData] = useState([]);
  const [isLoading,setLoader]=useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3031/files");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setFilteredData(result);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleDelete = (id) => {
    const updatedData = data.filter((each) => each.id !== id);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredResult = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) 
    );
    setFilteredData(filteredResult);
  };

  const renderLoader=()=>(
    <LoadingViewContainer>
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </LoadingViewContainer>
  )

  const renderLeaderboardHeader = () => (
    <LeaderboardHeader>
      <Name>Name</Name>
      <Size>Size</Size>
      <LastModified>Last Modified</LastModified>
    </LeaderboardHeader>
  )

  return (
    <AppContainer>
      <ResponSiveContainer>
      <Header/>
       
       <div class="card w-90 mb-3">
      <div class="card-body ">
        <h6 class="card-title">
        <FaCloudUploadAlt className="upload-icon"/>
          Upload finished (1/1 uploaded)</h6>
        <button type="button" class="btn btn-primary">View Details</button>
      </div>
      </div>
      
      <div class="card text-center">
      <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
   
    </ul>
  </div>
  <div class="card-body text-start">
    <div className="head">
      <div className="d-flex align-items-center">

      
    <img
          src="https://www.logolynx.com/images/logolynx/42/42e335218ff0e38d628c60fa62b69b32.png"
          alt="website logo"
          className="logo"
        />
        <h6 className="title">Evident-storage</h6></div>
        <p className="total-items">{data.length} items</p>

    </div>

    <InputAndButtonContainer>
    <div className="input-container">
    <FaSearch  size={15} />
    <input type="text" placeholder="Search Current Directory" className="input-field" onChange={handleSearch} value={searchQuery}/>

    </div>
    <div>

   
    <button type="button" class="btn btn-outline-primary button">Create Folder</button>
    <button class="btn btn-primary button" type="button">Upload</button>
    </div>
    </InputAndButtonContainer>
    <LeaderboardTableContainer>
      {renderLeaderboardHeader()}
      
     {  isLoading ? renderLoader() : filteredData.map(eachData => <Files key={eachData.id} fileDetails={eachData} onDelete={handleDelete}/>)
}

      
      
    </LeaderboardTableContainer>
    
  </div>
</div>
        
      </ResponSiveContainer>
       </AppContainer>

    
   
  );
};

export default Storage;
