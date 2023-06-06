import React from "react";
import { Link } from "react-router-dom";
import './css/Courses.css'

const CoursesPrimary=()=>{
    return(
        <div className="courses-primary">
      <div className="cp1">Our Courses</div>
        </div>
    )
}

const CourseCard=(props)=>{
    const {setJoinCourse}= props;
    
    async function handleJoin()
    {
       localStorage.setItem('courseSelected', props.coursename);
       setJoinCourse(props.coursename);
    }
    //handeled this with both localstorage and state because local storage need reload to make changes...so what we have done,we have used state to change the coursename and also save it in localstorage and when reload the page state get cleared but we again take it back from local storage.

    return(
        <div className="box box1">
        {/* {console.log(props.imagesrc)} */}
        <div> <img src={props.imagesrc} /></div>
        <div className="box-div2">
          <p>{props.coursename}</p>
            <div className="btn" onClick={handleJoin}><Link to="/join">Join</Link></div>
        </div>
        </div>
    )
}

const CoursesContainer=(props)=>{

    const {setJoinCourse}= props;
    return(
        <div id="container">
        <CourseCard imagesrc="/assets/images/course-image/course-img (1).png" coursename="System Analysis" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (2).png" coursename="Business Analytics" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (3).png" coursename="Artificial Intelligence" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (4).png" coursename="Data Science" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (5).png" coursename="Cyber Security" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (6).png" coursename="Digital Marketing" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (7).png" coursename="Crypto Protocol" setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (8).png" coursename="Business Statistics"setJoinCourse={setJoinCourse}/>
        <CourseCard imagesrc="/assets/images/course-image/course-img (9).png" coursename="System Design" setJoinCourse={setJoinCourse}/>
    </div>
    )
}

const Courses=(props)=>{
    return(
        <div>
            <CoursesPrimary />
            <CoursesContainer setJoinCourse={props.setJoinCourse} />
        </div>
    )
}

export default Courses;