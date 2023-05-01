// use local storage to manage cart data
const addToDb = id => {
    let appliedCart = getAppliedJob();
    // add quantity
    const quantity = appliedCart[id];
    if (!quantity) {
        appliedCart[id] = 1;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     appliedCart[id] = newQuantity;
    // }
    localStorage.setItem('appliedJob', JSON.stringify(appliedCart));
}

const removeFromDb = id => {
    const appliedCart = getAppliedJob();
    if (id in appliedCart) {
        delete appliedCart[id];
        localStorage.setItem('appliedJob', JSON.stringify(appliedCart));
    }
}

const getAppliedJob = () => {
    let appliedCart = {};

    //get the shopping cart from local storage
    const storedApplied = localStorage.getItem('appliedJob');
    if (storedApplied) {
        appliedCart = JSON.parse(storedApplied);
    }
    return appliedCart;
}

const deleteAppliedCart = () => {
    localStorage.removeItem('appliedJob');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob ,
    deleteAppliedCart
}
