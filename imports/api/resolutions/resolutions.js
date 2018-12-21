import { Mongo } from 'meteor/mongo';

// Define a new collection called 'Resolutions'
const Resolutions = new Mongo.Collection('resolutions');

export default Resolutions;