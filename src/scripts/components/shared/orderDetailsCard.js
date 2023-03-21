import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';
// import renderToDOM from '../../../../utils/renderToDom';
import { getSingleOrder } from '../../../api/orderData';

// const itemsTotal = (array) => {
//   let total = 0;
//   array.forEach((item) => {
//     total += item.price;
//   });
//   return total.toFixed(2);
// };

const ItemSum = (array) => {
  const addItemsTotal = array.filter((item) => item.price);
  const itemsValue = addItemsTotal.reduce((a, b) => a + b.price, 0);
  return itemsValue.toFixed(2);
};

const showDetails = (array, orderId) => {
  const totalOfItems = ItemSum(array);
  clearDom();
  getSingleOrder(orderId).then((order) => {
    if (order.status === 'open') {
      let domString = `
      <h1 id="welcome-title"> Order's Items </h1>
      <div id="text-style" class="items-add-btn" >
      <button type="button" class="btn btn-success btn-lg btn-3" id="add-items--${orderId}" style="width: 20rem">Add item</button>
      <br>
      <br>
      <button type="button" class="btn btn-success btn-lg btn-3" id="go-to-payment--${orderId}" style="width: 20rem">Go To Payment</button>
      <br>
      <br>
      <h1>Total: $${totalOfItems} </h1>
      </div>`;
      array.forEach((item) => {
        domString += `
          <div id="details-card">
            <div class="card-body">
              <h5 class="card-title">${item.item_name}</h5>
                <p class="card-text bold">${item.price}</p>
                <hr>
                <i id="edit-items-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
                <i id="delete-item-btn--${item.firebaseKey}----${item.order_id}" class="btn btn-danger">Delete</i>
            </div>
          </div>`;
      });
      renderToDOM('#store', domString);
    } else {
      let domCard = `
        <h1 id="welcome-title"> Order's Items </h1>
        <div id="text-style" class="items-add-btn" >
       <h1>Total: $${totalOfItems} </h1>
        </div>`;
      array.forEach((item) => {
        domCard += `
            <div id="details-card">
              <div class="card-body">
                <h5 class="card-title">${item.item_name}</h5>
                  <p class="card-text bold">${item.price}</p>
                  <hr>
                  <i id="edit-items-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
                  <i id="delete-item-btn--${item.firebaseKey}----${item.order_id}" class="btn btn-danger">Delete</i>
              </div>
            </div>`;
      });
      renderToDOM('#store', domCard);
    }
  });
};

//   let domString = `
//   <h1 id="welcome-title"> Order's Items </h1>
//   <div id="text-style" class="items-add-btn" >
//   <button type="button" class="btn btn-success btn-lg btn-3" id="add-items--${orderId}" style="width: 20rem">Add item</button>
//   <br>
//   <br>
//   <button type="button" class="btn btn-success btn-lg btn-3" id="go-to-payment--${orderId}" style="width: 20rem">Go To Payment</button>
//   <br>
//   <br>
//   <h1>Total: $${totalOfItems} </h1>
//   </div>`;
//   array.forEach((item) => {
//     domString += `
//       <div id="details-card">
//         <div class="card-body">
//           <h5 class="card-title">${item.item_name}</h5>
//             <p class="card-text bold">${item.price}</p>
//             <hr>
//             <i id="edit-items-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
//             <i id="delete-item-btn--${item.firebaseKey}----${item.order_id}" class="btn btn-danger">Delete</i>
//         </div>
//       </div>`;
//   });
//   renderToDOM('#store', domString);
// };

export default showDetails;
