export const articleSplit = article => {
  const articleArr = article.split(' ');

  if (articleArr.length > 50) {
    return articleArr.slice(0, 50).join(' ') + '...';
  }
  return articleArr.join(' ');
};
