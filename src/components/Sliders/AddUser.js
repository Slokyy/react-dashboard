import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <section
      className="slide-container add-client-container"
      id="add-client-container"
    >
      <span className="icon icon-md icon-ex  js-btn-close slide-ex"></span>
      <form action="#!" className="slide-form flex">
        <h2>New Client</h2>

        <div className="form-group flex">
          <label
            className="label-image flex shadow-me"
            htmlFor="add-client-img"
          >
            Add image
          </label>
          <input
            type="file"
            name="add-client-img"
            id="add-client-img"
            className="add-client-img"
            hidden
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="client-name"
            className="shadow-me input-text-gray"
            name="client-name"
            required
          />
          <label htmlFor="client-email" className="label-name">
            <span className="content-name">Client name:</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="client-email"
            className="shadow-me input-text-gray"
            name="client-email"
            required
          />
          <label htmlFor="client-email" className="label-name">
            <span className="content-name">Email:</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="client-manager"
            className="shadow-me input-text-gray"
            name="client-manager"
            required
          />
          <label htmlFor="client-manager" className="label-name">
            <span className="content-name">Manager:</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="client-developers"
            className="shadow-me input-text-gray"
            name="client-developers"
            required
          />
          <label htmlFor="client-developers" className="label-name">
            <span className="content-name">Developers:</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="client-billing"
            className="shadow-me input-text-gray"
            name="client-billing"
            required
          />
          <label htmlFor="client-billing" className="label-name">
            <span className="content-name">Billing:</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="client-mngr-factor"
            className="shadow-me input-text-gray"
            name="client-m-factor"
            required
          />
          <label htmlFor="client-m-factor" className="label-name">
            <span className="content-name">Manager factor:</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            id="client-payment"
            className="shadow-me input-text-gray"
            name="client-payment"
            required
          />
          <label htmlFor="client-payment" className="label-name">
            <span className="content-name">Payment method:</span>
          </label>
        </div>

        <div className="form-group">
          <textarea
            id="client-invoice"
            className="shadow-me input-text-gray"
            name="client-invoice"
            required
          ></textarea>
          <label htmlFor="client-invoice" className="label-name">
            <span className="content-name">Invoice data:</span>
          </label>
        </div>

        <div className="form-group input flex">
          <input type="button" className="btn js-btn-close" value="Cancel" />
          <input
            type="submit"
            className="btn btn-small btn-blue"
            value="Add client"
          />
        </div>
      </form>
    </section>
  );
};

export default AddUser;
