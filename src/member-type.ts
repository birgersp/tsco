export enum MemberType
{
    privateStaticConstProperties,
    privateConstProperties,
    privateStaticReadOnlyProperties,
    privateReadOnlyProperties,
    privateStaticProperties,
    privateProperties,

    protectedStaticConstProperties,
    protectedConstProperties,
    protectedStaticReadOnlyProperties,
    protectedReadOnlyProperties,
    protectedStaticProperties,
    protectedProperties,

    publicStaticConstProperties,
    publicConstProperties,
    publicStaticReadOnlyProperties,
    publicReadOnlyProperties,
    publicStaticProperties,
    publicProperties,

    constructors,

    publicStaticIndexes,
    publicIndexes,
    publicAbstractIndexes,

    protectedStaticIndexes,
    protectedIndexes,
    protectedAbstractIndexes,

    privateStaticIndexes,
    privateIndexes,
    privateAbstractIndexes,

    publicStaticMethods,
    publicMethods,
    publicAbstractMethods,

    protectedStaticMethods,
    protectedMethods,
    protectedAbstractMethods,

    privateStaticMethods,
    privateMethods,
    privateAbstractMethods
}