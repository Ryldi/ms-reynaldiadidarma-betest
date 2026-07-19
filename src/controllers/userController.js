const UserInfo = require('../models/UserInfo');

exports.list = async (req, res) => {
  const { filter, sort, limit = 50, skip = 0 } = req.query;
  const q = {};
  if (filter) Object.assign(q, JSON.parse(filter));

  const docs = await UserInfo.find(q).sort(sort || {}).limit(parseInt(limit)).skip(parseInt(skip));
  res.json(docs);
};

exports.detail = async (req, res) => {
  const doc = await UserInfo.findOne({ userId: req.params.id });
  if (!doc) return res.status(404).end();
  res.json(doc);
};

exports.create = async (req, res) => {
  const doc = new UserInfo(req.body);
  await doc.save();

  res.status(201).json(doc);
};

exports.update = async (req, res) => {
  const doc = await UserInfo.findOneAndUpdate({ userId: req.params.id }, req.body, { new: true });
  if (!doc) return res.status(404).end();
  res.json(doc);
};
exports.remove = async (req, res) => {
  const doc = await UserInfo.findOneAndDelete({ userId: req.params.id });
  res.status(204).end();
};

exports.getByAccountNumber = async (req, res) => {
  const { accountNumber } = req.params;
  
  const doc = await UserInfo.findOne({ accountNumber });
  if (!doc) return res.status(404).end();
  res.json(doc);
};

exports.getByRegistrationNumber = async (req, res) => {
  const { registrationNumber } = req.params;
  const doc = await UserInfo.findOne({ registrationNumber });
  if (!doc) return res.status(404).end();
  res.json(doc);
};

exports.getByLastLoginOlderThan3Days = async (req, res) => {
  const cutoff = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  const docs = await require('../models/AccountLogin').find({ lastLoginDateTime: { $lt: cutoff } });
  res.json(docs);
};
