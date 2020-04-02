export default function (doc) {
  // Return the path depending on Prismic Document's type

  if (doc.type === 'work') {
    return '/work/' + doc.uid;
  }

  if (doc.isBroken) {
   return '/not-found';
 }

  return '/not-found';
};
