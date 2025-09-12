const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ message: 'Server error' });
};
export default errorHandler;
//# sourceMappingURL=errorMiddleware.js.map