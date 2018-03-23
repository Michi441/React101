
import React from 'react';

const EditPage = (props) => {
  console.log(props);
  return(
  <div>
    Edit the page with the id of: { props.match.params.id}
  </div>
)
}

export default EditPage;
