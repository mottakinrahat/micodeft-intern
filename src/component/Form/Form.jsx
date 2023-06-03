import React from 'react';

const Form = () => {
    const handleSubmit = (e) => {
        const form = e.preventDefault();
        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        const image_url=form.image_url.value;

        console.log(name,description,category,image_url);
    }
    return (
        <form onSubmit={handleSubmit} className="card w-full max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" name="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" className="input input-bordered" />
                
                 
                </div>
                <div className="form-control mt-6">
                  <input  type="submit" className="btn btn-primary" value="Login" />
                </div>
              </div>
            </form>
    );
};

export default Form;