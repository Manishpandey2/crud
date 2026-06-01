exports.adminDashboard = async (req, res) => {
  const artworks = await art.findAll();

  res.render("admin", { art: artworks });
};
