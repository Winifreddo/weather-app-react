import React from "react";

export default function Form() {


return (
  <div className="Form">
        <form>
          <div className="row">
            <div className="col-8">
<div className="search">
              <input
                type="search" 
                placeholder="Enter a City 🔎"
                autoFocus="on"
                autoComplete="off"
                className="form-control sm"
              />
            </div>
            </div>
            
            <div className="col-3">
              <input
                type="submit" 
                value="Search"
                className="btn btn-dark w-100"
             />
              </div>
            
            </div>
        </form>
      </div>
        )
}