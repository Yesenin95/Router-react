export default function OnePost({post:{ id, title, body }}){
    return(
    <fieldset className="post-card">
      <legend>post #{id}</legend>        
      <h4>{title}</h4>
      {body}
    </fieldset>
    )
  }