import { getAllItems } from '../api/itemData';
import { getOrders } from '../api/orderData';

const totalTips = () => {
  getOrders().then((orders) => {
    const tipsClosed = orders.filter((order) => order.tip_amount);
    const tipsTotalAmount = tipsClosed.reduce((a, b) => a + b.tip_amount, 0);
    document.querySelector('#totalTips').innerHTML += `$${tipsTotalAmount}`;
  });
};

const totalRevenue = () => {
  getAllItems().then((items) => {
    const totalPrices = items.filter((item) => item.price);
    const ordersTotal = totalPrices.reduce((a, b) => a + b.price, 0);
    getOrders().then((orders) => {
      const allTips = orders.filter((order) => order.tip_amount);
      const tipsTotal = allTips.reduce((a, b) => a + b.tip_amount, 0);
      const totalRev = ordersTotal + tipsTotal;
      document.querySelector('#totalRev').innerHTML += `$${totalRev.toFixed(2)}`;
    });
  });
};

const totalCallinOrders = () => {
  getOrders().then((orders) => {
    const callinOrders = orders.filter((order) => order.type === 'phone');
    document.querySelector('#phoneOrders').innerHTML += `${callinOrders.length} Orders`;
  });
};

const totalWalkinOrders = () => {
  getOrders().then((orders) => {
    const walkInOrders = orders.filter((order) => order.type === 'in-person');
    document.querySelector('#inPersonOrders').innerHTML += `${walkInOrders.length} Orders`;
  });
};

const totalCashOrders = () => {
  getOrders().then((orders) => {
    const cashOrders = orders.filter((order) => order.payment_method === 'cash');
    document.querySelector('#cash-orders').innerHTML += `${cashOrders.length} Orders`;
  });
};

const totalCreditOrders = () => {
  getOrders().then((orders) => {
    const creditOrders = orders.filter((order) => order.payment_method === 'credit');
    document.querySelector('#credit-orders').innerHTML += `${creditOrders.length} Orders`;
  });
};

const totalMobileOrders = () => {
  getOrders().then((orders) => {
    const mobileOrders = orders.filter((order) => order.payment_method === 'mobile');
    document.querySelector('#mobile-orders').innerHTML += `${mobileOrders.length} Orders`;
  });
};
export {
  totalRevenue, totalTips, totalCallinOrders, totalWalkinOrders, totalCashOrders, totalCreditOrders, totalMobileOrders
};
