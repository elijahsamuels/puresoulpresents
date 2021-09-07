import React from "react";

export function TaxInfo() {
  return (
    <div className="userDetails">
      <h3>Tax Information</h3>
      <div width="100">
        <h6>
          Name and address user for your taxes. This is the PureSoul equivalent
          for a W9 form. Earnings more than $600 (USD) per calendar year will
          receive a 1099 form via email.
        </h6>
      </div>
      <p>
        <label>
          First Name
          <input name="first_name" placeholder="First Name" />
        </label>

        <label>
          Last Name
          <input name="last_name" placeholder="Last Name" />
        </label>
      </p>
      <p>
        <label>
          Address (line 1)
          <input name="user_tax_address1" placeholder="Address (line 1)" />
        </label>

        <label>
          Address (line 2)
          <input name="user_tax_address2" placeholder="Address (line 2)" />
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
          <input name="user_taxID" placeholder="123-45-6789" type="password" />
        </label>
      </p>
    </div>
  );
}

export default TaxInfo;
