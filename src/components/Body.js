
import { swiggy_api_URL } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../Hooks/useOnline";
import OfflineLandingPage from "./Offline";
import Banner from "./Banner";
const Body = () => {
    const [allrestaurants, setAllrestaurants] = useState([]);
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [SearchInput, setSearchInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        getRestaurants();
    }, []);

    // async function getRestaurants() {
    //     const data = await fetch(swiggy_api_URL);
    //     const json = await data.json();
    //     console.log(json)
    //     async function checkJsonData(jsonData) {
    //         for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    //             // initialize checkData for Swiggy Restaurant data
    //             let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //             // if checkData is not undefined then return it
    //             if (checkData !== undefined) {
    //                 return checkData;
    //             }
    //         }
    //     }
    async function getRestaurants(){
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            const restro = jsonData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

         
        setAllrestaurants(restro);
        setFilteredRestaurants(restro);
    }

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
            setErrorMessage("");
            if (filteredData?.length === 0) {
                setErrorMessage("No matches restaurant found");
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    };

    const online = useOnline();
    if (!online) {
        return <OfflineLandingPage />
    }
    if (!allrestaurants) return null;

    //if(filteredrestaurants?.length===0) return <h1>No results found</h1>
    return (allrestaurants.length === 0) ? <Shimmer /> : (
        <>
            <Banner/>
            <div className="search-container">
                <input type="text"
                    className="search-input"
                    placeholder="Search Restaurant...."
                    value={SearchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={() => {
                    searchData(SearchInput, allrestaurants);
                    //setFilteredRestaurants(data);
                }}>SEARCH</button>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}
            <div className="restraunt-list">
                {filteredrestaurants?.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/" + restaurant?.info?.id}
                            key={restaurant?.info?.id}>
                            <RestrauntCard {...restaurant?.info} />
                        </Link>

                    )
                })}
            </div>
        </>
    )
};
export default Body; 
