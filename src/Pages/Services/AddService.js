import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {
    // const { _id, title, img, price, description } = useLoaderData();

    const AddService = (event) => {
        event.preventDefault();
        const service_id = event.target.service_id.value;
        const img = event.target.img.value;
        const title = event.target.title.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const serviceData = { service_id, img, title, price, description };

        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your Service successfully upload')
                    event.target.reset();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form onSubmit={AddService} >


                <div className="w-full p-8 my-4 md:px-12  mx-auto   rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-3xl">Add Service</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='service_id' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Price*" required />

                        <input name='price' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Price*" required />

                    </div>
                    <div className=" w-full text-left mt-2">
                        <input name='title' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Title*" required />
                    </div>
                    <div className=" w-full text-left mt-2">
                        <label htmlFor="photoURL" className=" text-left text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Photo URL{" "}
                        </label>
                        <input name='img' id="photoURL" aria-labelledby="photoURL" type="text" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline " placeholder=" jpg,jpeg,png etc" required />
                    </div>
                    <div className="my-4">
                        <textarea name='description' placeholder="Description*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                    </div>
                    <div className="my-2 ">
                        <button type='submit' className=" uppercase text-sm font-bold tracking-wide bg-green-700 text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                            Add Service
                        </button>
                    </div>
                </div>






            </form>
        </div>
    );
};

export default AddService;