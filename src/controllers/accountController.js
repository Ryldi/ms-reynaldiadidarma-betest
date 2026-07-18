const AccountLogin = require('../models/AccountLogin');

exports.list = async (req, res) => {
  const { filter, sort, limit = 50, skip = 0 } = req.query;
  const q = {};
  if (filter) Object.assign(q, JSON.parse(filter));

  const docs = await AccountLogin.find(q).sort(sort || {}).limit(parseInt(limit)).skip(parseInt(skip));
  res.json(docs);
};

exports.detail = async (req, res) => {
  const doc = await AccountLogin.findById(req.params.id);
  if (!doc) return res.status(404).end();
  res.json(doc);
};

exports.create = async (req, res) => {
  const doc = new AccountLogin(req.body);
  await doc.save();
  res.status(201).json(doc);
};

exports.update = async (req, res) => {
  const doc = await AccountLogin.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).end();
  res.json(doc);
};

exports.remove = async (req, res) => {
  await AccountLogin.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

exports.getInactive = async (req, res) => {
  const cutoff = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  const docs = await AccountLogin.find({ lastLoginDateTime: { $lt: cutoff } });
  res.json(docs);
};
