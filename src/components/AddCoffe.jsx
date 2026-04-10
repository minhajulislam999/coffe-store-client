import React from 'react'

const AddCoffe = () => {
  return (
    <div className="p-24">
      <div className='p-12 text-center space-y-4'>
        <h1 className='text-6xl'>
          Add Coffee
        </h1>
        <p>
          It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input type="text" className="input w-full" placeholder="Enter coffee name" />
          </fieldset>
        </form>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input type="text" className="input w-full" placeholder="Enter supplier name" />
          </fieldset>
        </form>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Category</label>
            <input type="text" className="input w-full" placeholder="Enter coffee category" />
          </fieldset>
        </form>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Chef</label>
            <input type="text" className="input w-full" placeholder="Enter chef name" />
          </fieldset>
        </form>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input type="text" className="input w-full" placeholder="Enter taste description" />
          </fieldset>
        </form>
        <form>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input type="text" className="input w-full" placeholder="Enter details" />
          </fieldset>
        </form>

      </div>
      <div className='mt-4'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Photo</label>
            <input type="text" className="input w-full" placeholder="Enter photo URL" />
          </fieldset>
      </div>
      <div className='mt-4 text-center w-full'>
        <button className='btn btn-primary w-full'>Add Coffee</button>
      </div>
    </div>
  )
}

export default AddCoffe
