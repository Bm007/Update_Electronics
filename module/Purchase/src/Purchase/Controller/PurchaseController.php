<?php
namespace Purchase\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class PurchaseController extends AbstractActionController
{
    public function indexAction()
    {
    }

    public function addpurchasebillAction()
    {
        return new ViewModel();
    }

    public function addvendorAction()
    {
        return new ViewModel();
    }

    public function addproductAction()
    {
        return new ViewModel();
    }
}