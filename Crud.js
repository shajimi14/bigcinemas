
import React, { useState } from "react";
import Navbar from './Navbar';
import Movies from './Movies';

function Crud() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");
  const [editedItemImage, setEditedItemImage] = useState("");

  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  const handleImageChange = (event) => {
    setItemImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var x = items.length + 1;
    var newItem = {
      id: x,
      name: itemName,
      image: itemImage,
    };
    setItems([...items, newItem]);
    setItemName("");
    setItemImage("");
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedItemName(item.name);
    setEditedItemImage(item.image);
  };

  const handleSaveItem = () => {
    if (editedItemName.trim() !== "") {
      const updatedItems = items.map((item) => {
        if (item.id === editingItemId) {
          return { ...item, name: editedItemName, image: editedItemImage };
        }
        return item;
      });
      setItems(updatedItems);
      setEditingItemId(null);
      setEditedItemName("");
      setEditedItemImage("");
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItemName("");
    setEditedItemImage("");
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <br />
      <div className="container ">
        <div className="row">
          <div className="col-md-8">
            <h2>Add Movies</h2>
            <form onSubmit={handleSubmit}>
              <label>Movie Name </label>
              <input
                type="text"
                value={itemName}
                onChange={handleInputChange}
              />
              <label>Movie Image URL </label>
              <input
                type="text"
                value={itemImage}
                onChange={handleImageChange}
              />
              <button
                className="btn btn-small btn-success"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-3 mb-4"> 
              <div className="card">
                <div className="card-body">
                  
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card image"
                  />

                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      value={editedItemName}
                      onChange={(e) => setEditedItemName(e.target.value)}
                    />
                  ) : (
                    <h5 className="card-title">{item.name}</h5>
                  )}

                  <div className="card-footer">
                    {editingItemId === item.id ? (
                      <>
                        <button
                          className="btn btn-primary mr-2"
                          onClick={handleSaveItem}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-md mr-2"
                          onClick={() => handleEditItem(item)}
                          style={{ backgroundColor: "black", color: "red" }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-md "
                          onClick={() => handleDeleteItem(item.id)}
                          style={{
                            backgroundColor: "red",
                            color: "black",
                            border: "2px solid black",
                          }}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crud








