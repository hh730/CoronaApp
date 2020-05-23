import React,{useState,useEffect} from "react";
import {NativeSelect,FormControl} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "../../api/index";

const CountryPicker=({handleCountryChange})=>{
    const[fetchedCountries,setfFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setfFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setfFetchedCountries]);


    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=>{
                    return (<option key={i} value={country}>{country}</option>);
                })}
            </NativeSelect>
        </FormControl>
    )  
}

export default CountryPicker