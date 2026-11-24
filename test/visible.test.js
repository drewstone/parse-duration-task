import test from "node:test";
import assert from "node:assert/strict";
import { parseDuration } from "../src/parse-duration.js";

test("seconds", () => assert.equal(parseDuration("90s"), 90_000));
test("minutes", () => assert.equal(parseDuration("5m"), 300_000));
test("hours", () => assert.equal(parseDuration("1h"), 3_600_000));
test("compound hour+minute", () => assert.equal(parseDuration("1h30m"), 5_400_000));
test("rejects empty", () => assert.throws(() => parseDuration(""), TypeError));
