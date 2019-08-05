<?php
namespace Purchase;

use Zend\Router\Http\Segment;

return array(
    'controllers' => array(        
        'invokables' => array(
            'Purchase\Controller\Purchase' => 'Purchase\Controller\PurchaseController',
        ),
    ),

    'router' => array(
        'routes' => array(
            'purchase' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/purchase[/:action]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',                        
                    ),
                    'defaults' => array(
                        'controller' => 'Purchase\Controller\Purchase',
                        'action'     => 'addpurchasebill',
                    ),
                ),
            ),

            'addVendor' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/purchase/addVendor',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',                        
                    ),
                    'defaults' => array(
                        'controller' => 'Purchase\Controller\Purchase',
                        'action'     => 'addvendor',
                    ),
                ),
            ),

            'addProduct' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/purchase/addProduct',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',                        
                    ),
                    'defaults' => array(
                        'controller' => 'Purchase\Controller\Purchase',
                        'action'     => 'addproduct',
                    ),
                ),
            ),



        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'vendor' => __DIR__ . '/../view',
        ),
    ),
);