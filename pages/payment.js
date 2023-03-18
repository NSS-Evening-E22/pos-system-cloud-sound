import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const paymentForm = (obj) => {
  clearDom();
  const domString = `
    <form id="close-order--${obj.firebaseKey}" class="mb-4">
        <div class="form-group" id="select-payment">
        <label for="category">Payment Type</label>
          <select class="form-control" placeholder="Select Category" id="payment" name="paymentType" required>
          <option value="">Select a payment type</option>
            <option value="credit" >Credit Card</option>
            <option value="cash">Cash</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <br>
        <div class="form-group">
        <label for="tip-amt">Tip Amount</label>
        <input type="text" class="form-control" id="tips" aria-describedby="tipAmount" required>
      </div>
      <br>
        <button type="submit" id="close-order"class="btn btn-primary">Close Order
        </button>
      </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentForm;
