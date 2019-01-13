import React from "react";

const Admin = React.forwardRef( (props,ref) =>{
    return(
        <div>
            <h1>This is admin</h1>
            <input
                type="file"
                ref={ref}
            />
        </div>
    );
})

export default Admin;