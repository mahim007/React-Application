const courseAction = (course) => {
    console.log("action called with: "+course);
    return({
        type: "CREATE_COURSE",
        course: course
    });
};

export default courseAction;