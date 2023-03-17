import {
  totalCallinOrders, totalCashOrders, totalCreditOrders, totalMobileOrders, totalRevenue, totalTips, totalWalkinOrders
} from '../src/scripts/revenueData';
import clearDom from '../utils/clearDom';

const viewRevenue = () => {
  clearDom();
  document.querySelector('#store').innerHTML = `
  <div class="revenuePage">  
    <div class="revenueHeader" id="welcome-title">
        <h1>REVENUE</h1>
      </div>
      <br>
      <div>
        <h3>DATE RANGE:</h3><br>
        <h3 id="dateRange"><h3><br>
      </div>
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
                  <div class="title">Cash Orders</div>
                  <i class="zmdi zmdi-download"></i>
                  <div class="value" id="cash-orders"></div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div class="card black" style="height: 50%, width: 25%">
                  <div class="title">Credit Orders</div>
                  <i class="zmdi zmdi-download"></i>
                  <div class="value" id="credit-orders"></div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div class="card black" style="height: 50%, width: 25%">
                  <div class="title">Mobile Orders</div>
                  <i class="zmdi zmdi-download"></i>
                  <div class="value" id="mobile-orders"></div>
              </div>
          </div>
          </div>
      </div>
      `;
  totalRevenue();
  totalTips();
  totalCallinOrders();
  totalWalkinOrders();
  totalCashOrders();
  totalCreditOrders();
  totalMobileOrders();
};
export default viewRevenue;
