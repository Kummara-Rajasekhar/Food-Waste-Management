import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/Context'
import axios from 'axios'
import { toast } from 'react-toastify/unstyled'
const MyProfile = () => {

  const { userData, setUserData, token, backendurl, loaduserData } = useContext(AppContext)
  const [isEdit, seetIdEdit] = useState(false)
  const [image, setimage] = useState(false)
  const updateuserProfiledata = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      image && formData.append('image', image)
      const { data } = await axios.post(backendurl + '/api/user/update-profile', formData, { headers: token })
      if (data.success) {
        toast.success(data.success)
        await loaduserData()
        seetIdEdit(false)
        setimage(false)

      } else {
        toast.error(data.message)
      }



    } catch (error) {
      toast.error(error.message)
    }
  }

  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {
        isEdit ?
          <label htmlFor='image'>
            <div className='inline-block relative cursor-pointer'>
              <img className='w-36 riunded opacity-75 ' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
              <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
            </div>
            <input onChange={(e) => setimage(e.target.files[0])} type="file" id='image' hidden />
          </label>
          : <img className='w-36 rounded' src={userData.image} alt="" />
      }


      {
        isEdit
          ? <input className='font-medium text-3xl text-neutral-800 mt-4' type='text' value={userData.name} onChange={e => setUserData(pre => ({ ...pre, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-node' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52 ' type='number' value={userData.phone} onChange={e => setUserData(pre => ({ ...pre, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Addresst</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' type="text" onChange={e => setUserData(pre => ({ ...pre, address: { ...pre.address, line1: e.target.value } }))} value={userData.address.line1} />
                <br />
                <input className='bg-gray-50' type="text" onChange={e => setUserData(pre => ({ ...pre, address: { ...pre.address, line2: e.target.value } }))} value={userData.address.line2} />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>

      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5  mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={e => setUserData(pre => ({ ...pre, gender: e.target.value }))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='font-medium'>{userData.gender}</p>
          }
          <p>Birthday:</p>{
            isEdit
              ? <input className='max-w-28 bg-gray-100' type='date' onChange={e => setUserData(pre => ({ ...pre, dob: e.target.value }))} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit
            ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={updateuserProfiledata}>Save Information</button>
            : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => seetIdEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
