export function isEmpty(value) {
   if (value == null) {
      return true;
   }

   if (Array.isArray(value)) {
      return !value.length;
      /*  const arr = [];
       *  arr.length   <-- 0
       *  !arr.length  <-- true
       */
   }

   if (typeof val === 'object') {
      return !Object.keys(value).length;
   }
}
