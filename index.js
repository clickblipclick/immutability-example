import update from "immutability-helper";

var log = function() {
  for (var i = 0; i < arguments.length; i++) {
    document.write(JSON.stringify(arguments[i], 0, 2));
    document.write("<br/>");
  }
};

var collection = {
  "0": { selected: false },
  "1": { selected: false },
  "2": { selected: false },
  "3": { selected: false },
  "4": { selected: false },
  "5": { selected: false },
  "6": { selected: false }
};

log(collection);

var spec1 = {};
spec1["4"] = { selected: { $set: true } };

var updatedCollection = update(collection, spec1);
console.log(updatedCollection["3"].selected, updatedCollection["4"].selected);
// logs false, true as expected
log(updatedCollection);
// prints an empty object

var spec2 = {};
spec2["4"] = { selected: { $set: false } };

var secondUpdatedCollection = update(updatedCollection, spec2);
console.log(secondUpdatedCollection["3"], secondUpdatedCollection["4"].selected);
// logs undefined, false (not expected)
log(secondUpdatedCollection);
// prints an empty object
