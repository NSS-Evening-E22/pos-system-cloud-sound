import {
  totalCallinOrders, totalCashOrders, totalCreditOrders, totalMobileOrders, totalRevenue, totalTips, totalWalkinOrders
} from '../src/scripts/revenueData';
import clearDom from '../utils/clearDom';

const viewRevenue = () => {
  clearDom();
  document.querySelector('#store').innerHTML = `
  <div class="revenuePage">  
    <div class="revenueHeader">
    <br>
        <h1 id="welcome-title">REVENUE</h1>
      </div>
      <br>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 my-3">
      <div class="card-list">
          <div class="row">
              <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div class="card blue" style="height: 50%, width: 25%">
                      <div class="title">Total Revenue</div>
                      <i class="zmdi zmdi-upload"></i>
                      <div class="value" id="totalRev"></div>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div class="card green" style="height: 50%, width: 25%">
                      <div class="title">Total Tips</div>
                      <i class="zmdi zmdi-upload"></i>
                      <div class="value" id="totalTips"></div>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div class="card orange" style="height: 50%, width: 25%">
                      <div class="title">Call In Orders</div>
                      <i class="zmdi zmdi-download"></i>
                      <div class="value" id="phoneOrders"></div>
                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div class="card red" style="height: 50px, width: 75px">
                      <div class="title">Walk In Orders</div>
                      <i class="zmdi zmdi-download"></i>
                      <div class="value" id="inPersonOrders"></div>
                  </div>
              </div>
              <br>
              <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div class="card black" style="height: 50%, width: 25%">
                  <div class="title">Cash Payment</div>
                  <i class="zmdi zmdi-download"></i>
                  <div class="value" id="cash-orders"></div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div class="card black" style="height: 50%, width: 25%">
                  <div class="title">Credit Payment</div>
                  <i class="zmdi zmdi-download"></i>
                  <div class="value" id="credit-orders"></div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div class="card black" style="height: 50%, width: 25%">
                  <div class="title">Mobile Payment</div>
                  <i class="zmdi zmdi-download"></i>
                  <div class="value" id="mobile-orders"></div>
              </div>
          </div>
          </div>
      </div>
      `;
  totalTips();
  totalRevenue();
  totalCallinOrders();
  totalWalkinOrders();
  totalCashOrders();
  totalCreditOrders();
  totalMobileOrders();
};
export default viewRevenue;
