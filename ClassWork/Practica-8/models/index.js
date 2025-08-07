import User from "./user.js";
import Post from "./post.js";

// Устанавливаем связь One-to-One
User.hasOne(Post, {foreignKey: 'userId', as: 'post'});
Post.belongsTo(User, {foreignKey: 'userId', as: 'user'});
export {User, Post};

