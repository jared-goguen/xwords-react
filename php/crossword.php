<?php

function element_map($function, $element) {
  $result = [];

  if (is_null($element)) {
    return $result;
  }

  foreach($element as $child) {
    $result[] = $function($child);
  }
  return $result;
}


class Rebus {
  public $row = null;
  public $column = null;
  public $short = null;
  public $text = null;

  function __construct($rebusNode) {
    $this->row = $rebusNode['Row'] - 1;
    $this->column = $rebusNode['Col'] - 1;
    $this->short = $rebusNode['Short']->__toString();
    $this->text = $rebusNode->__toString();
  }
}


class Clue {
  public $row = null;
  public $column = null;
  public $number = null;
  public $direction = null;
  public $answer = null;
  public $text = null;

  function __construct($clueNode) {
    $this->row = $clueNode['Row'] - 1;
    $this->column = $clueNode['Col'] - 1;
    $this->number = $clueNode['Num']->__toString();
    $this->direction = $clueNode['Dir']->__toString();
    $this->answer = $clueNode['Ans']->__toString();
    $this->text = $clueNode->__toString();
  }
}


class Puzzle {
  public $title = null;
  public $date = null;
  public $size = null;
  public $grid = null;
  public $rebuses = null;
  public $clues = null;

  function __construct($puzzleNode) {
    $this->title = $puzzleNode->Title->__toString();
    $this->date = $puzzleNode->Date->__toString();
    
    $sizeNode = $puzzleNode->Size;
    $this->size = [
      'rows' => $sizeNode->Rows + 0, 
      'columns' => $sizeNode->Cols + 0, 
    ];

    $getText = function($node) {
      return $node->__toString();
    };

    $rowNodes = $puzzleNode->Grid->Row;
    $this->grid = element_map($getText, $rowNodes);

    $objectCreator = function($class) {
      return function($args) use ($class) {
        return new $class($args);
      };
    };

    $rebusNodes = $puzzleNode->RebusEntries->Rebus;
    $this->rebuses = element_map($objectCreator('Rebus'), $rebusNodes);

    $clueNodes = $puzzleNode->Clues->Clue;
    $this->clues = element_map($objectCreator('Clue'), $clueNodes);
  }
}

function loadPuzzle($path) {
  $qualified_path = config('data_path') . $path;
  $xml = simplexml_load_file($qualified_path);
  $puzzleNode = $xml->Puzzle;
  return new Puzzle($puzzleNode);
}

function crosswordJSON($date) {
  $path = $date . '.xml';
  $puzzle = loadPuzzle($path);
  return json_encode($puzzle);
}

