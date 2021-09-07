import React from "react";

export function PaymentInfo() {
  return (
    <div className="userDetails">
      <h3>Payment Information</h3>
      <p>
        <label>
          Name on your account
          <input
            name="user_account_name"
            placeholder="User Account Name"
            type="text"
          />
        </label>
      </p>
      <p>
        <label>
          ACH Routing Number
          <input name="user_ach_number" placeholder="ACH Routing Number" type="password"/>
        </label>
      </p>

      <p>
        <label>
          City
          <input name="user_tax_city" placeholder="City" />
        </label>
        <label>
          State
          <input name="user_tax_state" placeholder="State" />
        </label>
        <label>
          Zip
          <input name="user_tax_zip" placeholder="Zip" />
        </label>
      </p>
      <p>
        <label>
          SSN/EIN
          <input name="user_taxID" placeholder="123-45-6789" />
        </label>
      </p>
    </div>
  );
}

export default PaymentInfo;
