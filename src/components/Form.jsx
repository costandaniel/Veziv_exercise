import React,{useState} from 'react'
import './Form.scss'
import axios from 'axios'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom';
function Form() {
  const imageRef = React.useRef();
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [image,setImage] = useState(undefined);

  function handleChangeTitle(event) {
    const {value} =event.target;
    setTitle(value);
  }
  function handleChangeDescription(event) {
    const {value} =event.target;
    setDescription(value);
  }
  function handleChangeImage(event) {
    const value =event.target.files[0];
    setImage(value);
  }

  async function handleClick(event){
    event.preventDefault();
    const formData = new FormData()
    formData.append('title',title);
    formData.append('description',description)
    formData.append('image',image);
    const result = await axios.post('http://localhost:5000/create',formData,{headers:{'Content-Type':'multipart/form-data'}})
    console.log(result);
    setTitle('');
    setDescription('');
    imageRef.current.value=null;
    
  }

  return (
   
    <div className="form__body">
      <div className="form__container">
      <div className='header__form'>
        <Link to={'/'}>
        <span className='header__icon'><MdOutlineArrowBackIosNew  /></span>
        </Link>
        <h2 className='header__text'>Create new entry</h2>
        </div>
        <form action="">
          <div className="form-control">
          <input name='title' type="text" className='text_input' onChange={handleChangeTitle} value={title} placeholder='title'/>
          </div>
          <label htmlFor="description" className='info'>Description</label>
          <textarea name='description' cols="30" rows="10" onChange={handleChangeDescription} value={description}  placeholder='Describe in a few words..'></textarea>
          <label className="custom-file-upload">
          <input ref={imageRef} type="file" onChange={handleChangeImage} accept="image/*" />
          Upload a photo
          </label>
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form