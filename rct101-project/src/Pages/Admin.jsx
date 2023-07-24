import React from 'react'
import "./admin.css"

const Admin = () => {
  return (
    <>
  <header>
    <nav>
      <div>
        <img src="./images/logo.png" alt="image error" id="logo" />
      </div>
      <div id="search_div">
        <span className="fa fa-search" />
        <input
          type="search"
          id="search"
          placeholder="Search by name or location"
        />
      </div>
      <div>
        <button id="join">Login</button>
      </div>
    </nav>
  </header>
  <main>
    <div id="container">
      <div id="update_div">
        <div className="columns four sidebar-one" id="sidebar-one">
          {/* Add hotels */}
          <div id="filterAdd">
            <h4>Add Employee</h4>
            <input
              type="text"
              id="hotel-name"
              className="u-full-width"
              placeholder="Name"
            />
            <br />
            {/* <input type="text" id="hotel-image" class="u-full-width" placeholder="Hotel Image Url" > */}
            <input
              type="text"
              id="hotel-location"
              className="u-full-width"
              placeholder="Position"
            />
            <br />
            <input
              type="text"
              id="hotel-desc"
              className="u-full-width"
              placeholder="Department"
            />
            <br />
            <input
              type="text"
              id="hotel-price"
              className="u-full-width"
              placeholder="Status"
            />
            <br />
            <input
              type="text"
              id="hotel-phone"
              className="u-full-width"
              placeholder="phone number"
            />
            <br />
            <input
              type="email"
              id="hotel-email"
              className="u-full-width"
              placeholder="Email"
            />
            <br />
            <button
              id="add-hotel"
              className="u-full-width button button-primary"
            >
              Add Employee
            </button>
            <hr />
            <br />
          </div>
          {/* update hotels */}
          <div id="Updatediv">
            <h4>Update all fields of Employee</h4>
            <input
              type="text"
              id="update-hotel-id"
              className="u-full-width"
              placeholder="ID"
            />
            <br />
            <input
              type="text"
              id="update-hotel-name"
              className="u-full-width"
              placeholder="Name"
            />
            {/* <input type="text" id="update-hotel-image" class="u-full-width" placeholder="Hotel Image Url" > */}
            <input
              type="text"
              id="update-hotel-location"
              className="u-full-width"
              placeholder="Position"
            />
            <br />
            <input
              type="text"
              id="update-hotel-desc"
              className="u-full-width"
              placeholder="Department"
            />
            <br />
            <input
              type="text"
              id="update-hotel-price"
              className="u-full-width"
              placeholder="Status"
            />
            <br />
            <input
              type="number"
              id="update-hotel-review"
              className="u-full-width"
              placeholder="Phone Number"
            />
            <br />
            <input
              type="email"
              id="update-hotel-email"
              className="u-full-width"
              placeholder="Email"
            />
            <br />
            <button
              id="update-hotel"
              className="u-full-width button button-primary"
            >
              Update all fields
            </button>
            <hr />
            <br />
          </div>
          {/* update hotel price */}
          <div id="Updateprice">
            <h4>Update only Phone Number</h4>
            <input
              type="text"
              id="update-score-hotel-id"
              className="u-full-width"
              placeholder="ID"
            />
            <br />
            <input
              type="number"
              id="update-score-hotel-price"
              className="u-full-width"
              placeholder="Phone Number"
            />
            <br />
            <button
              id="update-score-hotel"
              className="u-full-width button button-primary"
            >
              Update Phone Number
            </button>
            {/* <hr /> */}
            <br />
          </div>
          {/* sort by price */}
          <div id="Sortdiv">
            {/* <h4>Sort Based On Price</h4>
      <button id="sort-price-low-to-high" class="u-full-width button button-primary">
        Sort Low To High
      </button>
      <br />
      <button id="sort-price-high-to-low" class="u-full-width button button-primary">
        Sort High To Low
      </button> */}
            {/* <hr /> */}
            <br />
          </div>
          {/* sort by rating */}
          <div id="SortRating">
            {/* <h4>Sort Based On Rating</h4>
      <button id="sort-rating-low-to-high" class="u-full-width button button-primary">
        Sort Low To High
      </button> */}
            <br />
            {/* <button id="sort-rating-high-to-low" class="u-full-width button button-primary">
        Sort High To Low
      </button> */}
            {/* <hr /> */}
          </div>
        </div>
      </div>
      {/* product div */}
      <div id="product_div">
        <div className="filter_head">
          <h3 id="count">Results</h3>
        </div>
        <div id="product_container">{/* append the product card here */}</div>
      </div>
    </div>
  </main>
</>
  )
}

export default Admin