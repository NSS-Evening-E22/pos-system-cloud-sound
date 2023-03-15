import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const paymentForm = () => {
  clearDom();
  const domString = `
      <form " class="mb-4">
        <div class="form-group" id="select-payment">
        <label for="category">Payment Type</label>
          <select class="form-control" placeholder="Select Category" id="payment" name="paymentType" required>
          <option value="">Select a payment type</option>
            <option value="Card" >Card</option>
            <option value="Cash">Cash</option>
            <option value="Check">Check</option>
          </select>
        </div>
        <br>
        <div class="form-group">
        <label for="tip-amt">Tip Amount</label>
        <input type="text" class="form-control" id="tips" aria-describedby="tipAmount"  required>
      </div>
      <br>
        <button type="submit" class="btn btn-primary">Close Order
        </button>
      </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentForm;
