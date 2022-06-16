export function isEmpty(value) {
   if (value == null) {
      return true;
   }

   if (Array.isArray(value)) {
      // const arr = [];
      return !value.length; // !arr.legth  <-- true
   } // arr.legth  <-- 0

   if (typeof val === 'object') {
      return !Object.keys(value).length;
   }
}
