const Tour = require('./../models/tourModel');

// Loads this getAllTours module onto the exports Object
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find(); // Await the return of a promise for all the docs in the Tour collection

    res.status(200).json({
      status: 'success',
      results: tours.length, // give us the array length
      data: {
        // Envelope the tours in data
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  try {
    // Call the create method on the Tour model to create a new document.
    // Store the returned body inside the newTour var
    const newTour = await Tour.create(req.body); // waits for req.body to be filled

    // Respond to the client
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    // Typically a creation validation error for rejected promise
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    // 204 means no content
    status: 'success',
    data: null,
  });
};
