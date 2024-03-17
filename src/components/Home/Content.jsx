import "./Content.css";
import img1 from "../assets/rover_2.png";

function Content() {

  return (
    <div className=" bg-white text-black" id="contenttt">
        <h1 className="text-2xl ml-10 pt-4 sm:text-7xl font-[200]">
         <b> Empowering</b> <b className=" text-[#FF9F1C]">  Innovation </b> <br /> <b> Through Robotics</b>
        </h1>

        <div className="flex sm:flex-row flex-col-reverse items-center">
      <div className="m-10 w-[80%]" id="kq">
        <p className="text-4xl w-[90%] text-black ">
         <b className=" bbb text-[#ffa629] text-5xl">AM Robotics: </b>  Unleashing Innovation through Product Design, Robotics
          Research, and Advanced DIY Robokits. Join us in Driving Your Ideas
          towards Innovation for DIY, Education, Research, and Automation.
        </p>
        <br />
        <br />
        <button className="button">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Explore</span>
        </button>
      </div>
      <div id="imageee">
        <img src={img1} alt="" className=" aspect-auto"  />
      </div>
      </div>
    </div>
  );
}

export default Content;
