import React, { useEffect, useState } from "react";
import "./css/job.css";
import { Button,IconButton} from '@mui/material';
const Job = (props) => {
  const {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
    responsibility,
    background,
  
  } = props.data;
  let keywords = [role, level, ...languages, ...tools];
  const [show, setShow] = useState(false);
  const [apply,setApply] = useState(false);
  return (
    <div>
      <div
        className={
          featured ? "job-container job-container--borderLeft" : "job-container"
        }
      >
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="part1">
          <div className="company">
            <span className="cname">{company}</span>
            {props.data.new && <span className="new">new!</span>}
            {props.data.featured && <span className="featured">featured</span>}
          </div>

          <div className="position" onClick={() => setShow(!show)}>
            {position}<span >{show?"Hide":"Read more"}</span>
          </div>

          <div className="details">
            <span>{postedAt}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{contract}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>

        <div className="part2">
          {keywords.map((key, id) => (
            <span onClick={() => props.setkeywords(key)} key={id}>
              {key}
            </span>
          ))}
        </div>
      </div>
      {show ? (
         <div className="jobDetails">
         <div className="backgroundDiv"><img src={background} className="background" alt="" /></div>
           <div>
             <img src={logo} className="detailsLogo"alt="" />
           </div>
           <h2>{position}</h2>
           <div className="detailsCompany">{company}</div>
           <div>{location}</div>
           <Button variant="contained" onClick={()=>(setApply(true))}>{apply?"Applied ":"Apply Now"}</Button>
           <div className="description">
             <h3>Full Job Description:</h3><p>{responsibility}</p>
           </div>
           <div>Languages required:{languages.map((e)=>(<span>{e}</span>))}</div>
           <div>Tools required:{tools.map((e)=>(<span>{e}</span>))}</div>
           <hr />
           <h3>Hiring Insights</h3>
           <h5>Job activity</h5>
           <p>Posted {postedAt}</p>
         </div>
      ) : null}
    </div>
  );
};

export default Job;
