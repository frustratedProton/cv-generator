import { useState } from 'react';
import '../styles/Education.css';

export default function Education() {
	return (
		<>
			<form className="form" action="">

				<div className="eduContainer">
          <label>School/University</label>
          <input 
            type="text" 
            name="uni" 
            id="uni" 
            // onChange={}
            value={''}
            placeholder='School/University'
          />
        </div>

        <div className="eduContainer">
          <label>City/Country</label>
          <input 
            type="text" 
            name="city" 
            id="city" 
            // onChange={}
            value={''}
            placeholder='City/Country'
          />
        </div>

        <div className="eduContainer">
          <label>Degree</label>
          <input 
            type="text" 
            name="degree" 
            id="degree" 
            // onChange={}
            value={''}
            placeholder='Degree'
          />
        </div>

        <div className="eduContainer">
          <label>City/Country</label>
          <input 
            type="text" 
            name="city" 
            id="city" 
            // onChange={}
            value={''}
            placeholder='City/Country'
          />
        </div>

        <div className="eduContainer">
          <label>Start Date</label>
          <input 
            type="date" 
            name="startDate" 
            id="startDate" 
            // onChange={}
          />
        </div>

        <div className="eduContainer">
          <label>End Date</label>
          <input 
            type="date" 
            name="endDate" 
            id="endDate" 
            // onChange={}
          />
        </div>

			</form>
		</>
	);
}
