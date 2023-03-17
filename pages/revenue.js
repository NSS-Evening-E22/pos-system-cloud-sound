import clearDom from '../utils/clearDom';

const viewRevenue = () => {
  clearDom();
  document.querySelector('#store').innerHTML = `
  <div class="revenuePage">  
    <div class="revenueHeader">
        <h1>REVENUE</h1>
      </div>
      <br>
      <div class="total">
        <h1 id="totalRev">TOTAL REVENUE: </h1>
      </div>
      <div>
        <h3>DATE RANGE:</h3><br>
        <h3 id="dateRange"><h3><br>
      </div>
      <div>
        <h3 id="totalTips">TOTAL TIPS:  </h3><br>
        <h3 id="phoneOrders">TOTAL CALL IN ORDERS:  </h3><br>
        <h3 id="inPersonOrders">TOTAL WALK IN ORDERS:  </h3><br>
        
      </div>
      <div class="paymentType">
          <h3>PAYMENT TYPES: </h3><br>
          <h3 id="cashOrders">CASH: </h3><br>
          <h3 id="creditOrders">CREDIT: </h3><br>
          <h3 id="mobileOrders">MOBILE: </h3>
      </div>
  <div>
      `;
};
export default viewRevenue;
