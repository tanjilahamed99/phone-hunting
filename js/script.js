const loadData = async (inputText = 'iphone', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
    const data = await res.json();
    const PhoneData = data.data;
    displayData(PhoneData, isShowAll);
};

const displayData = (phones, showAll) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showMore = document.getElementById('show-more');
    if (phones.length > 12 && !showAll) {
        showMore.classList.remove('hidden')
    } else {
        showMore.classList.add('hidden');
    }
    if (!showAll) {
        phones = phones.slice(0, 12);
    }
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-purple-300 shadow-xl px-5 py-5 rounded-lg mt-10 bg-white border-2 shadow-none border-[#CFCFCF]`
        phoneCard.innerHTML = `
       <div class="">
          <figure class="bg-gray-200 rounded-lg px-5 py-10"><img src="${phone.image}" alt="Shoes" /></figure>
          <div class="card-body text-center">
             <h2 class="text-2xl font-medium">${phone.phone_name}</h2>
             <p>There are many variations of passages of available, but the majority have suffered</p>
             <h3 class="text-xl font-medium">999$</h3>
           <div class="card-actions justify-center mt-3">
              <button onclick="showDetails('${phone.slug}');my_modal_5.showModal()"  class="btn btn-primary">Show Details</button>
            </div>
         </div>
       </div>
       `
        phoneContainer.appendChild(phoneCard);
    })
    loading(false);
};


// details
const showDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const details = data.data;
    // console.log(console.log(details));
    displayDetails(details)
};

const displayDetails = (data) => {
    console.log(data);
    const phoneDetailContainer = document.getElementById('phone-detail-container');
    phoneDetailContainer.innerHTML = `
    <div class="bg-gray-200 px-20 py-10 rounded-lg items-center text-center flex mx-auto justify-center">
    <img src="${data.image}" alt="">
    </div>
    <h3 class="font-semibold text-2xl mt-8">${data.name}</h3>
    <p class="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <h3 class="font-bold text-xl">Storage : <span class="text-[#706F6F] font-normal">${data.mainFeatures.storage}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F]">Display Size</span> : <span class="text-[#706F6F] font-normal">${data.mainFeatures.displaySize}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F]">chipSet</span> : <span class="text-[#706F6F] font-normal">${data.mainFeatures.chipSet}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F]">Memory</span> : <span class="text-[#706F6F] font-normal">${data.mainFeatures.memory}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F]">slug</span> : <span class="text-[#706F6F] font-normal">${data.slug}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F]">release Date : <span class="text-[#706F6F] font-normal">${data.releaseDate}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F]">Brand : <span class="text-[#706F6F] font-normal">${data.brand}</span></h3>
    <h3 class="font-bold text-xl text-[#403F3F] ">GPS : <span class="text-[#706F6F] font-normal">${data.others.GPS}</span></h3>
    
     <div class="modal-action ">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn bg-red-400 text-white">Close</button>
    </div>
    `

}


const phoneSearch = (isShowAll) => {
    const inputFiled = document.getElementById('input-filed');
    const inputText = inputFiled.value;
    // console.log(inputText);
    loadData(inputText, isShowAll);
};

const loading = (isLoading) => {
    const loading = document.getElementById('loading');
    if (isLoading) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

// show all button
const showAll = () => {
    phoneSearch(true);
}


loadData();