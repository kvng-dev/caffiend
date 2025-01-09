import { useState } from "react";
import { coffeeOptions } from "../utils";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const CoffeeForm = ({ isAuthenticated }) => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMinute] = useState(0);

  const { globalData, setGlobalData, globalUser } = useAuth();

  async function handleSubmitForm() {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }

    if (!selectedCoffee) return;

    try {
      const newGlobalData = {
        ...(globalData || {}),
      };

      const nowTime = Date.now();

      const timeToSubtract = hour * 60 * 60 * 1000 + min * 60 * 100;
      const timestamp = nowTime - timeToSubtract;

      const newData = {
        name: selectedCoffee,
        cost: coffeeCost,
      };

      newGlobalData[timestamp] = newData;

      console.log(timestamp, selectedCoffee, coffeeCost);
      setGlobalData(newGlobalData);

      const userRef = doc(db, "users", globalUser.uid);
      const res = await setDoc(
        userRef,
        {
          [timestamp]: newData,
        },
        { merge: true }
      );

      setSelectedCoffee(null);
      setHour(0);
      setMinute(0);
      setCoffeeCost(0);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {showModal && (
        <Modal handleCloseModal={() => setShowModal(false)}>
          <Authentication handleCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
      <div className="section-header">
        <i className="fa-solid fa-pencil"></i>
        <h2>Start Tracking Today</h2>
      </div>
      <h3>Select coffee type</h3>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, i) => (
          <button
            onClick={() => {
              setSelectedCoffee(option.name);
              setShowCoffeeTypes(false);
            }}
            className={`button-card ${
              option.name === selectedCoffee ? "coffee-button-selected" : ""
            }`}
            key={i}
          >
            <h4>{option.name}</h4>
            <p>{option.caffeine}mg</p>
          </button>
        ))}
        <button
          onClick={() => {
            setSelectedCoffee(null);
            setShowCoffeeTypes(true);
          }}
          className={`button-card ${
            showCoffeeTypes ? "coffee-button-selected" : ""
          }`}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeeTypes && (
        <select
          onChange={(e) => setSelectedCoffee(e.target.value)}
          name="coffee-list"
          id="coffee-list"
        >
          <option value={null}>Select type</option>
          {coffeeOptions.map((option, i) => (
            <option key={i} value={option.name}>
              {option.name} ({option.caffeine}mg)
            </option>
          ))}
        </select>
      )}

      <h4>Add the cost ($)</h4>
      <input
        type="number"
        value={coffeeCost}
        onChange={(e) => setCoffeeCost(e.target.value)}
        className="w-full"
        placeholder="4.50"
      />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select onChange={(e) => setHour(e.target.value)} id="hours-select">
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24,
            ].map((hour, i) => (
              <option key={i} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h6>Mins</h6>
          <select onChange={(e) => setMinute(e.target.value)} id="mins-select">
            {[0, 5, 10, 15, 30, 45].map((min, i) => (
              <option key={i} value={min}>
                {min}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={handleSubmitForm}>Add Entry</button>
    </>
  );
};
export default CoffeeForm;
