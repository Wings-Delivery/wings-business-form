import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({});
  const categories = ["Sushi", "Pizza", "Hummus", "Burgers", "Vegan", "Georgian", "Drinks"];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Register Your Business on Wings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Business Category</label>
          <select name="category" onChange={handleChange} className="w-full border p-2 rounded">
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <input name="name" placeholder="Business Name" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="file" name="logo" onChange={handleChange} className="w-full" />
        <textarea name="about" placeholder="About your business" rows="3" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="mainDishes" placeholder="Main Dishes" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="hours" placeholder="Working Hours" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="file" name="photos" multiple onChange={handleChange} className="w-full" />

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="createCourierPool" defaultChecked onChange={handleChange} />
          <span>Create a Wings Courier Pool</span>
        </label>

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="subscribeNotifications" defaultChecked onChange={handleChange} />
          <span>Receive updates and useful info</span>
        </label>

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="termsAccepted" required onChange={handleChange} />
          <span>I agree to the Wings Terms of Use</span>
        </label>

        <button type="submit" className="w-full bg-black text-white py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
