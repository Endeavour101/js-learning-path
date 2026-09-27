/* const manifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
}; */

let normalizeUnits = (manifest) => {
  const regularManifest = structuredClone(manifest);
  if (regularManifest.unit === "lb") {
    regularManifest.weight *= 0.45;
    regularManifest.unit = "kg";
  }
  return regularManifest;
};

let validateManifest = (manifest) => {
  const returnObject = {};
  if (manifest.containerId === undefined) {
    returnObject.containerId = "Missing";
  } else if (
    manifest.containerId === null ||
    !isFinite(manifest.containerId) ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    returnObject.containerId = "Invalid";
  }

  if (manifest.weight === undefined) {
    returnObject.weight = "Missing";
  } else if (
    manifest.weight === null ||
    !isFinite(manifest.weight) ||
    manifest.weight <= 0
  ) {
    returnObject.weight = "Invalid";
  }

  if (!manifest.destination) {
    returnObject.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    returnObject.destination = "Invalid";
  }

  if (!manifest.unit) {
    returnObject.unit = "Missing";
  } else if (typeof manifest.unit !== "string") {
    returnObject.unit = "Invalid";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    returnObject.unit = "Invalid";
  }

  if (manifest.hazmat === null || manifest.hazmat === undefined) {
    returnObject.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    returnObject.hazmat = "Invalid";
  }

  return returnObject;
};

let processManifest = (manifest) => {
  let validatedManifest = validateManifest(manifest);
  let containerId = manifest.containerId;
  if (Object.keys(validatedManifest).length === 0) {
    let normalizedManifest = normalizeUnits(manifest);
    console.log(`Validation success: ${normalizedManifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(validatedManifest);
    //console.log(`Errors found:`, JSON.stringify(validatedManifest, null, 2));
  }
};

/* console.log(
  processManifest({ containerId: -88, destination: "Soledad", weight: NaN }),
); */
