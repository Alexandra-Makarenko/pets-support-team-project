export const ModalNotice = (notice, user) => {
  return (
    <section>
      <h3>{notice.category}</h3>
      <img src={notice.imageUrl} alt={notice.name} />
      <h4>Cute pet looking for a home</h4>
      <ul>
        <li>
          <h5>Name:</h5>
          <p>{notice.name}</p>
        </li>
        <li>
          <h5>Birthday:</h5>
          <p>{notice.dateofbirth}</p>
        </li>
        <li>
          <h5>Breed:</h5>
          <p>{notice.breed}</p>
        </li>
        <li>
          <h5>Location:</h5>
          <p>{notice.adress}</p>
        </li>
        <li>
          <h5>Sex:</h5>
          <p>{notice.sex ? 'Male' : 'Female'}</p>
        </li>
        <li>
          <h5>Email:</h5>
          <p>{user.email}</p>
        </li>
        <li>
          <h5>Phone:</h5>
          <p>{user.phone}</p>
        </li>
        <li>
          <h5>Price:</h5>
          <p>{notice.price}</p>
        </li>
      </ul>
      <span>
        <h5>Comments:</h5>
        <p>{notice.comment}</p>
      </span>
      <button>Contact</button>
      <button>
        Add to <img />
      </button>
    </section>
  );
};
