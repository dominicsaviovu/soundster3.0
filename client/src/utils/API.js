import axios from "axios";
export default {
  // Gets all uploads
  getUploads: function() {
    return axios.get("/api/music");
  },
  // Gets the upload with the given id
  getUpload: function(id) {
    return axios.get("/api/music/" + id);
  },
  // Deletes the upload with the given id
  deleteUpload: function(id) {
    return axios.delete("/api/music/" + id);
  },
  // Saves a upload to the database
  saveUpload: function(uploadData) {
    return axios.post("/api/music", uploadData);
  }
};